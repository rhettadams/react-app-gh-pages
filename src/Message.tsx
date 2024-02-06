/// npm run dev
function Message() {
    const name = 'name';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;