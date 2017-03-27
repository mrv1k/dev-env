import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating bundle for production.'));

webpack(webpackConfig).run(function(err, stats) {
  if (err) { // a fatal error
    console.log(chalk.red(err));
    return 1;
  }
// Display some stats to the command line but this assures that Warnings, Erros and Stats are displayed to the console
// at the bottom we display a success message
  const jsonStats =  stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Your app for production has been built to /dist');
  return 0;
});
