import {
  Command,
  Context,
  SubcommandDefinition,
  command,
  param,
} from '../../../../../../';

export const subcommands: SubcommandDefinition[] = [
  {
    name: 'biu',
    aliases: ['b', 'iu'],
    brief: 'Overridden biu brief',
  },
  {
    name: 'pia-pia',
    aliases: ['pia'],
  },
];
