import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

export const toastContent = writable({ action: "", targetSLashie: "", description: "" });

export const progressBar = tweened(1);
