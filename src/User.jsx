function User({ name, age, job }) {
    return (
        <div>
            <h1>이름 : {name}</h1>
            <p>나이: {age}</p>
            <p>직업: {job}</p>
        </div>
    )
}

export default User