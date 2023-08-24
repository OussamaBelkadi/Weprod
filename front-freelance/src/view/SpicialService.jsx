import React, { useState, useRef } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import './SpicailSer.css'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import UnderLine from '@tiptap/extension-underline';
import axiosPer from './axiosPer'
import {FaBold, FaItalic, FaStrikethrough, FaHeading, FaListOl, FaListUl, FaQuoteLeft,FaRedo, FaUndo, FaUnderline} from 'react-icons/fa'


const MenuBar = ({ editor }) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className='w-full h-10 border-2 border-gray-200 flex gap-8 mb-0 px-3'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FaItalic/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <FaUnderline/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <FaStrikethrough/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <FaHeading/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListUl/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaListOl/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <FaQuoteLeft/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <FaUndo/>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <FaRedo/>
        </button>
      </div>
    )
  }
  

const AudioRecorder = () => {
 
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);
  const [isRecordingEnabled, setIsRecordingEnabled] = useState(false);
  

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      UnderLine,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: `
    
    `,
  })

  const startRecording = () => {
    const constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
        mediaRecorder.start();
        setIsRecording(true);
        setIsRecordingEnabled(true);
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setIsRecordingEnabled(false)
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
    }
  };


  const playRecording = async() => {
    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    const formData = new FormData();
    formData.append('audio', recordedChunks[0], 'recording.wav'); 
    formData.append('file', file)
    try {
      await axiosPer.post('/service',formData).then(({data})=>{
          console.log(data)
          
        })
    } catch (error) {
      console.error('Error storing audio:', error);
    }
  }

  const [file, setFile] = useState(null);

  const handelRequest = async (ev)=>{
    ev.preventDefault();

    
    
  };
   
    
  
  
 

  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-8 mb-8'>
        <h3 className='text-5xl text-white font-semibold mb-8'>Specify your request</h3>
        <div className="flex  w-[460px] ml-20">
            {!isRecording && <button onClick={startRecording} className='mr-1'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:scale-105">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
            </button>}

            {isRecording && <button onClick={stopRecording} disabled={!isRecording}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:scale-105">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                </svg>
            </button>}

            {!isRecording && <button onClick={playRecording} disabled={recordedChunks.length === []}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:scale-105 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
            </button>}
        </div>
        {isRecordingEnabled ? (
            <div className="recording-animation">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            </div>
        ) : null}
        <form method='POST' onSubmit={handelRequest}>
            {audioRef && <audio ref={audioRef} controls className=' w-[460px]' />}

              <div className="flex flex-col mt-2 w-[460px]">
                  <label htmlFor="file" className='text-md text-white font-bold'>Upload the file</label>
                  <input type="file" className='bg-white rounded-sm mt-1' onChange={(ev)=>{setFile(ev.target.files[0])}}/>
              </div>
              <div className="block mt-2  w-[460px] text-md font-bold text-white"><label htmlFor="">Description of request</label></div>
            <div className='bg-white'>
                  <MenuBar editor={editor} />
                  <EditorContent editor={editor} className="h-44 pl-1" />
              </div>
              <button type="submit" className='bg-gradient-to-r w-44 rounded-sm border-2 border-white mt-4 from-blue-200 to-slate-500 text-white font-bold '>Reserve</button>
          </form>
         
      </div>
       
    
  );
};

export default AudioRecorder;
