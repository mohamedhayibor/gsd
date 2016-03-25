#!/usr/bin/env node
'use strict'
const nodeNotifier = require('node-notifier');
const meow = require('meow');

const cli = meow(`
  Usage:

    gsd <word or sentence>
    -v/--version    Print version
    -h/--help       Print help
  `, {
    alias: {
      v: 'version',
      h: 'help'
    },
    string: ['_']
});

const task = cli.input.join(' ');

if (!task) {
  console.error('A task is required');
  process.exit(1);
}


const interval = setInterval(function () {
  nodeNotifier.notify({
    title: 'Get this one thing done',
    message: task
  });
}, 5 * 60 * 1000);
