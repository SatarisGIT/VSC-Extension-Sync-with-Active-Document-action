import * as vscode from "vscode";
export function activate(context: vscode.ExtensionContext) {
  //   console.log('Extension "sync-with-active-document-action" is active');

  let disposable = vscode.commands.registerCommand(
    "sync-with-active-document-action.sync",
    () => {
      vscode.commands.executeCommand(
        "workbench.files.action.showActiveFileInExplorer"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
