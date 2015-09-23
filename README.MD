# react-templates, typescript
Additional: , tsd, webpack , vscode setup with npm tasks  
 
## Building

Run 'npm install -g webpack`
Run 'npm install -g rt'
Run 'npm intall -g mocha'
Run 'npm intall -g tsd'
Run 'npm intall -g http-server'

Run `npm install` 

Open `index.html` to see the result.

## License

MIT

:VSCode Setup included 
Shift+Ctrl+B Build => RT, TS, WebPAck
Shift+Ctrl+T Test  => Build test, Mocha

VSCode does not remember file associations, yet
To View Rt as html/xml  
Shift+Ctrl+P then Change Language Mode, then Select Language 
And a bit quicker:
Shift+Ctrl+P then Preferences: Open Keyboard Shortcuts
Then paste :
<code>
[
	{
        "key": "ctrl+l",
        "command": "workbench.action.editor.changeLanguageMode",
        "when": "editorTextFocus"
    }
]
</code> 
