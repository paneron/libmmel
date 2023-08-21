import { textToMMEL, MMELToText } from '@';

import type {
  MMELNode,
  DataType,
  MMELObject,
} from '@';

import type {
  MMELDataAttribute,
  MMELDataClass,
  MMELEnumValue,
  MMELEnum,
  MMELRegistry,
} from '@';

import type {
  MMELEventNode,
  MMELEndEvent,
  MMELSignalCatchEvent,
  MMELStartEvent,
  MMELTimerEvent,
} from '@';

import type {
  VarType,
  NOTE_TYPES,
  BINARY_TYPES,
  LINK_TYPES,
} from '@';

import type {
  MMELMetadata,
  MMELReference,
  MMELProvision,
  MMELRole,
  MMELVariable,
  MMELVarSetting,
  MMELView,
  MMELNote,
  MMELTerm,
  MMELTable,
  MMELFigure,
  MMELTextSection,
  MMELLink,
  MMELComment,
} from '@';

import type {
  MMELApproval,
  MMELProcess,
} from '@';

import type {
  MMELSubprocessComponent,
  MMELEdge,
  MMELSubprocess,
  MMELEGate,
} from '@';

import type {
  MMELModel,
} from '@';

const sampleText = `root Root

version "v0.0.1-dev1"

metadata {
  title "Test title"
  schema "Test Schema v1.0.0-dev1"
  edition "2023"
  author "Ribose"
  shortname "TEST 12345"
  namespace "TEST12345"
}

subprocess Root {
}
`;

const sampleMMEL = {
  comments : {},
  elements : {},
  enums    : {},
  figures  : {},
  links    : {},
  meta     : {
    author    : 'Ribose',
    datatype  : 'metadata',
    edition   : '2023',
    namespace : 'TEST12345',
    schema    : 'Test Schema v1.0.0-dev1',
    shortname : 'TEST 12345',
    title     : 'Test title'
  },
  notes : {},
  pages : {
    Root : {
      childs   : {},
      data     : {},
      datatype : 'subprocess',
      edges    : {},
      id       : 'Root',
    },
  },
  provisions : {},
  refs       : {},
  roles      : {},
  root       : 'Root',
  sections   : {},
  tables     : {},
  terms      : {},
  vars       : {},
  version    : 'v0.0.1-dev1',
  views      : {},
};

test('textToMMEL converts schema version correctly', () => {
  expect(textToMMEL(sampleText).meta.schema).toBe(sampleMMEL.meta.schema);
});

type TestType = 'test' |
  MMELNode |
  DataType |
  MMELObject |
  MMELDataAttribute |
  MMELDataClass |
  MMELEnumValue |
  MMELEnum |
  MMELRegistry |
  MMELEventNode |
  MMELEndEvent |
  MMELSignalCatchEvent |
  MMELStartEvent |
  MMELTimerEvent |
  VarType |
  typeof NOTE_TYPES |
  typeof BINARY_TYPES |
  typeof LINK_TYPES |
  MMELMetadata |
  MMELReference |
  MMELProvision |
  MMELRole |
  MMELVariable |
  MMELVarSetting |
  MMELView |
  MMELNote |
  MMELTerm |
  MMELTable |
  MMELFigure |
  MMELTextSection |
  MMELLink |
  MMELComment |
  MMELApproval |
  MMELProcess |
  MMELSubprocessComponent |
  MMELEdge |
  MMELSubprocess |
  MMELEGate |
  MMELModel;


test('"@" exports all interfaces', () => {
  const testType: TestType = 'test';
  expect(testType).toBe('test');
})
