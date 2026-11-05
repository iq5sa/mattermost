import {copyFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));

const filesToCopy = [
    ['../../channels/src/packages/mattermost-redux/src/types/extend_redux.d.ts', 'lib/types/extend_redux.d.ts'],
    ['../../channels/src/packages/mattermost-redux/src/types/extend_react_redux.d.ts', 'lib/types/extend_react_redux.d.ts'],
];

await Promise.all(
    filesToCopy.map(([source, destination]) => copyFile(
        path.join(packageRoot, source),
        path.join(packageRoot, destination),
    )),
);
