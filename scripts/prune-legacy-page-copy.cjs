const fs = require("node:fs");
const ts = require("typescript");

const filePath = "lib/i18n.ts";
const locales = ["en", "ar", "fr", "it", "es", "de", "pt", "nl", "zh"];
const source = fs.readFileSync(filePath, "utf8");
const parsed = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true);
const declaration = parsed.statements
  .filter(ts.isVariableStatement)
  .flatMap((statement) => statement.declarationList.declarations)
  .find((item) => ts.isIdentifier(item.name) && item.name.text === "translations");

let initializer = declaration?.initializer;
while (initializer && (ts.isAsExpression(initializer) || ts.isParenthesizedExpression(initializer))) {
  initializer = initializer.expression;
}
if (!initializer || !ts.isObjectLiteralExpression(initializer)) {
  throw new Error("Could not find the translations object; no files changed.");
}

const propertyName = (property) => {
  if (!ts.isPropertyAssignment(property)) return undefined;
  if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) return property.name.text;
  return undefined;
};
const getProperty = (object, name) => object.properties.find((property) => propertyName(property) === name);
const renderedLocales = [];

for (const locale of locales) {
  const localeProperty = getProperty(initializer, locale);
  if (!localeProperty || !ts.isPropertyAssignment(localeProperty) || !ts.isObjectLiteralExpression(localeProperty.initializer)) {
    throw new Error(`Missing locale object for ${locale}; no files changed.`);
  }
  const nav = getProperty(localeProperty.initializer, "nav");
  const footer = getProperty(localeProperty.initializer, "footer");
  if (!nav || !footer) throw new Error(`Missing nav/footer for ${locale}; no files changed.`);

  const navText = source.slice(nav.getStart(parsed), nav.end);
  const footerText = source.slice(footer.getStart(parsed), footer.end);
  renderedLocales.push(`  ${locale}: {\n    ${navText},\n    ${footerText},\n  },`);
}

const lineEnding = source.includes("\r\n") ? "\r\n" : "\n";
const replacement = [
  "export const translations = {",
  ...renderedLocales,
  "} as const;",
].join(lineEnding);
const updated = source.slice(0, declaration.getStart(parsed)) + replacement + source.slice(declaration.end);
const validation = ts.createSourceFile(filePath, updated, ts.ScriptTarget.Latest, true);
if (validation.parseDiagnostics.length > 0) {
  const diagnostic = validation.parseDiagnostics[0];
  const position = diagnostic.start ?? 0;
  throw new Error(
    `The pruned translations object did not parse; no files changed. ${ts.flattenDiagnosticMessageText(diagnostic.messageText, " ")}\n` +
      updated.slice(Math.max(0, position - 80), position + 120),
  );
}

fs.writeFileSync(filePath, updated);
console.log("Kept only localized navigation and footer copy in i18n.ts.");