import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import AceEditor from 'react-ace';
import gfm from 'remark-gfm';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/mode-c_cpp';
import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/mode-markdown';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  saveButton: {
    margin: theme.spacing(1),
  },
  root: {
    minWidth: 500,
  },
  markdown: {
    fontSize: '16px',
    margin: theme.spacing(1),
  },
  subTitle: {
    color: '#888888',
  },
}));

export default function QuestionEditor({question, updateResponse, saveResponse}) {
  const classes = useStyles();
  const [showSolution, setShowSolution] = useState(false);
  const response = question?.response?.text ?? '';
  const mode = question?.question?.code_language || 'markdown';
  const readOnly = !updateResponse || !saveResponse;

  return (
    <Box className={classes.root}>
      <Dialog
        open={showSolution}
        onClose={() => setShowSolution(false)}
      >
        <DialogTitle>Question {question.question.pool} Solution</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {question?.pool?.solution}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSolution(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant={'subtitle1'} className={classes.subTitle}>
        Question {question.question.pool}
      </Typography>
      <ReactMarkdownWithHtml
        className={classes.markdown}
        plugins={[gfm]}
        allowDangerousHtml
      >
        {question?.question?.question ?? ''}
      </ReactMarkdownWithHtml>
      <Typography variant={'subtitle1'} className={classes.subTitle}>
        Your Answer:
      </Typography>
      {readOnly ? (
        <AceEditor
          mode={mode}
          theme="monokai"
          value={response}
          readOnly
        />
      ) : (
        <AceEditor
          mode={mode}
          theme="monokai"
          value={response}
          onChange={updateResponse}
          commands={[{ // commands is array of key bindings.
            name: 'save', // name for the key binding.
            bindKey: {win: 'Ctrl-s', mac: 'Command-s'}, // key combination used for the command.
            exec: saveResponse, // function to execute when keys are pressed.
          }]}
        />
      )}
    </Box>
  );
}
