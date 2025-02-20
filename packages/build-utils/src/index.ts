import FileBlob from './file-blob';
import FileFsRef from './file-fs-ref';
import FileRef from './file-ref';
import { Lambda, createLambda, getLambdaOptionsFromFunction } from './lambda';
import { NodejsLambda } from './nodejs-lambda';
import { Prerender } from './prerender';
import download, { DownloadedFiles, isSymbolicLink } from './fs/download';
import getWriteableDirectory from './fs/get-writable-directory';
import glob, { GlobOptions } from './fs/glob';
import rename from './fs/rename';
import {
  execAsync,
  spawnAsync,
  execCommand,
  spawnCommand,
  walkParentDirs,
  getScriptName,
  installDependencies,
  runPackageJsonScript,
  runNpmInstall,
  runBundleInstall,
  runPipInstall,
  runShellScript,
  runCustomInstallCommand,
  getEnvForPackageManager,
  getNodeVersion,
  getSpawnOptions,
  getNodeBinPath,
  scanParentDirs,
} from './fs/run-user-scripts';
import {
  getLatestNodeVersion,
  getDiscontinuedNodeVersions,
} from './fs/node-version';
import streamToBuffer from './fs/stream-to-buffer';
import debug from './debug';
import getIgnoreFilter from './get-ignore-filter';
import { getPlatformEnv } from './get-platform-env';

export {
  FileBlob,
  FileFsRef,
  FileRef,
  Lambda,
  NodejsLambda,
  createLambda,
  Prerender,
  download,
  DownloadedFiles,
  getWriteableDirectory,
  glob,
  GlobOptions,
  rename,
  execAsync,
  spawnAsync,
  getScriptName,
  installDependencies,
  runPackageJsonScript,
  execCommand,
  spawnCommand,
  walkParentDirs,
  getNodeBinPath,
  runNpmInstall,
  runBundleInstall,
  runPipInstall,
  runShellScript,
  runCustomInstallCommand,
  getEnvForPackageManager,
  getNodeVersion,
  getLatestNodeVersion,
  getDiscontinuedNodeVersions,
  getSpawnOptions,
  getPlatformEnv,
  streamToBuffer,
  debug,
  isSymbolicLink,
  getLambdaOptionsFromFunction,
  scanParentDirs,
  getIgnoreFilter,
};

export { EdgeFunction } from './edge-function';
export {
  detectBuilders,
  detectOutputDirectory,
  detectApiDirectory,
  detectApiExtensions,
} from './detect-builders';
export { detectFileSystemAPI } from './detect-file-system-api';
export { detectFramework } from './detect-framework';
export { getProjectPaths } from './get-project-paths';
export { DetectorFilesystem } from './detectors/filesystem';
export { readConfigFile } from './fs/read-config-file';
export { normalizePath } from './fs/normalize-path';

export * from './should-serve';
export * from './schemas';
export * from './types';
export * from './errors';

/**
 * Helper function to support both `@vercel` and legacy `@now` official Runtimes.
 */
export const isOfficialRuntime = (desired: string, name?: string): boolean => {
  if (typeof name !== 'string') {
    return false;
  }
  return (
    name === `@vercel/${desired}` ||
    name === `@now/${desired}` ||
    name.startsWith(`@vercel/${desired}@`) ||
    name.startsWith(`@now/${desired}@`)
  );
};

export const isStaticRuntime = (name?: string): boolean => {
  return isOfficialRuntime('static', name);
};

export { workspaceManagers } from './workspaces/workspace-managers';
export {
  getWorkspaces,
  GetWorkspaceOptions,
  Workspace,
  WorkspaceType,
} from './workspaces/get-workspaces';
export {
  getWorkspacePackagePaths,
  GetWorkspacePackagePathsOptions,
} from './workspaces/get-workspace-package-paths';
export { monorepoManagers } from './monorepos/monorepo-managers';
