interface Iuser {
    id: any;
    name: string;
    room: string
}

const users: Iuser[] = [];
const addUser = (id: any, name: string, room: string) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const condidate = users.find((user: Iuser) => user.id === id && user.name === name);

    if (condidate) {
        return {error: "User is taken"}
    } else {
        const user = {id, name, room};
        users.push(user);
        return {user}

    }
};

const remuveUser = (id: any) => {

    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id: any) => users.find((user: Iuser) => user.id === id);

const getUserRoom = (room: string) => users.filter((user: Iuser) => user.room === room);

export {addUser, getUser, remuveUser, getUserRoom};