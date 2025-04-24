import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

/**
 * Função para tocar áudio usando a API nativa (iOS/Android) ou Web Speech API.
 * @param text Texto que será falado.
 */
export function handlePlayAudio(text: string) {
  if (Platform.OS === 'web') {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  } else {
    Speech.speak(text, {
      language: 'en-US',
      rate: 0.9, // Velocidade da fala (0.1 ~ 1.0)
      pitch: 1.0, // Tom da voz
    });
  }
}
