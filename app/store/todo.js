import { atom } from 'nanostores';

export const $todolist = atom([]);

export function addItem(textitem) {
    $todolist.set([...$todolist.get(), { id: Math.random(), text: textitem, checked: false }]);
}
export function delItem(id) {
    $todolist.set($todolist.get().filter(el => el.id !== id));
}

export function toggleItem(id) {
    const
        index = $todolist.get().findIndex(el => el.id === id),
        value = $todolist.get()[index];
    value.checked = !value.checked;

    $todolist.set($todolist.get().with(index, { ...value }));
}