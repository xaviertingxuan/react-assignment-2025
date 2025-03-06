import { atom, useAtom } from "jotai";

//atom is a state container that can be read from and written to by multiple components
//useAtom is a hook that returns the current value of an atom and a function to update it
//flashMessageAtom is an atom that stores the message and type of the flash message
//atom is a piece of data that is going to be shared

export const flashMessageAtom = atom({
    message: '',
    type: 'info'
});

export const useFlashMessage = () => {

    // get the amtom and the mutator function to update the atom
    //which shared data to update or to get from --> flashMessageAtom
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    //helper function: a function that makes it easier to do something

    //set which message to show and its type

    //when a function parameter has a "=xyz" it means that if the parameter is not passed, it will be set to "xyz", then xyz will be the default value

    const showMessages = (message, type = 'info') => {
        setFlashMessage ({message, type});
    }

    const clearMessage = () => {
        setFlashMessage({ message:'', type: 'info' });
    };

    const getMessage = () => {
        return flashMessage;
    }

    //returning objects
   return {
        getMessage,
        showMessages,
        clearMessage
   };
}