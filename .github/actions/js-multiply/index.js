const core = require('@actions/core');

try {
  // Leer inputs
  const a = Number(core.getInput('a'));
  const b = Number(core.getInput('b'));

  const result = a * b;

  console.log(`Resultado de ${a} × ${b} = ${result}`);

  // Exportar output
  core.setOutput('result', result);

} catch (error) {
  core.setFailed(error.message);
}
