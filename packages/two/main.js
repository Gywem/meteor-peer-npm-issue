import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({ moment: '2.18.1' }, 'moment');
checkNpmVersions({ 'simpl-schema': '0.3.1' }, 'simpl-schema');

const moment = require('moment');
const SimpleSchema = require('simpl-schema').default;

const isSimpleSchemaLoaded = !!SimpleSchema;
console.warn(
  isSimpleSchemaLoaded
    ? 'SS loaded!'
    : 'SS isn\'t loaded!'
);

const isMomentLoaded = !!moment;
console.warn(
  isMomentLoaded
    ? 'moment loaded!'
    : 'moment isn\'t loaded!'
);
