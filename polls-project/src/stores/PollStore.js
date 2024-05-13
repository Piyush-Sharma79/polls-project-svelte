// @ts-ignore
import {writable} from 'svelte/store';

const PollStore = writable(JSON.parse(localStorage.getItem('polls')) || [
    {
        question: 'React or Svelte?',
        answerA: 'React',
        answerB: 'Svelte',
        votesA: 9,
        votesB: 15
    },
]);

PollStore.subscribe((value) => localStorage.setItem('polls', JSON.stringify(value)));
export default PollStore;