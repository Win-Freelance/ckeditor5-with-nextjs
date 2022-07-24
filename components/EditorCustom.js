import Editor from "../ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const editorConfiguration = {
  //   toolbar: {
  //     items: [
  //       "heading",
  //       "|",
  //       "bold",
  //       "italic",
  //       "bulletedList",
  //       "numberedList",
  //       "|",
  //       "alignment",
  //       "outdent",
  //       "indent",
  //       "|",
  //       "undo",
  //       "redo",
  //     ],
  //   },
  //   language: "vi",
};

function EditorCustom() {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data="<h1>Hello from React!</h1>"
      onChange={(event, editor) => {}}
    />
  );
}
export default EditorCustom;
