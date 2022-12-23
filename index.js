require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');

Toolkit.run(
  async tools => {
    tools.log.info('Running the action...');
    await runAction(tools);

    tools.log.success('Label successfully applied!');
  },
  {
    event: [
      'pull_request.opened',
      'pull_request.reopened',
      'pull_request.synchronize',
      'pull_request.ready_for_review',
      'pull_request.edited',
      'pull_request.converted_to_draft',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);