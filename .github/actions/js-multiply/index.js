const core = require('@actions/core');

try {
  // Leer inputs
  const a = Number(core.getInput('a'));
  const b = Number(core.getInput('b'));

  const results = a * b;

  console.log(`Resultado de ${a} × ${b} = ${results}`);

  // Exportar output
  core.setOutput('results', results);

} catch (error) {
  core.setFailed(error.message);
}
