import { atom, useAtom } from "jotai";


export const flashMessageAtom = atom({
    message: '',
    type: 'info'
});

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessages = (message, type = 'info') => {
        setFlashMessage ({message, type});
    }

    const getMessage = () => {
        return flashMessage;
    }

    const clearMessage = () => {
        setFlashMessage({ message: '', type: 'info' });
    };

   return {
        getMessage,
        showMessages,
        clearMessage
   };
}


