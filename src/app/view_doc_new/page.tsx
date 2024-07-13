'use client';

import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, Modifier, convertFromHTML, ContentState, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRedo, faDownload } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Menu = dynamic(() => import('../menu/page'), { ssr: false });

const EditDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const initialHTML = '';
  const blocksFromHTML = convertFromHTML(initialHTML);
  const initialEditorState = EditorState.createWithContent(
    ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap)
  );

  const [editorState, setEditorState] = useState<EditorState>(initialEditorState);
  const router = useRouter();

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    console.log(html);
    router.push('/dashboard_1'); // Navigate to /dashboard_1 after saving
  };

  const handleDownload = () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState, { blockStyleFn: myBlockStyleFn });
    const blob = new Blob(['<!DOCTYPE html><html><head><meta charset="utf-8"><title>Document</title></head><body>' + html + '</body></html>'], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const element = document.createElement('a');
    element.href = url;
    element.download = 'document.docx';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    router.push('/dashboard_1'); // Navigate to /dashboard_1 after download
  };

  const handleRedo = () => {
    setEditorState(EditorState.undo(editorState));
  };

  const myBlockStyleFn = (block: any) => {
    const data = block.getData();
    const textAlign = data.get('text-align');
    if (textAlign) {
      return `text-align-${textAlign}`;
    }
    return '';
  };

  const editorStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '12pt',
    minHeight: '200px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  return (
    <div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-col justify-center items-center p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-4/5">
          <div className="bg-gray-200 p-4 flex justify-between items-center flex-wrap">
          </div>
          <div className="p-4 max-h-[600px] overflow-y-auto">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={handleEditorChange}
              toolbarHidden
              blockStyleFn={myBlockStyleFn}
              editorStyle={editorStyle}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-4 w-4/5">
          <div className="flex space-x-4 justify-center">
            <button
              onClick={handleRedo}
              className="px-6 py-3 bg-white text-yellow-500 rounded shadow border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faRedo} className="mr-2" /> Refazer
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" /> Salvar
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              className="px-20 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDocument;
