import React, { useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = ({ text }) => {
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    // Speak the provided text when the component mounts
    speak(text);
  }, [text]); // Trigger the effect whenever the text changes

  return null; // Since this component only handles text-to-speech, it doesn't render any UI
};

export default TextToSpeech;
