import Image from "next/image";


const Users = async () => {

    const getAllUser = async () => {
        const res: any = await fetch(`http://localhost:3000/apis/users`)
        const data = await res.json();
        return data.users.data
    }

    const users = await getAllUser();



    return (
        <div>
            <h1>Get All User </h1>
            {
                users.map((user: any, index: number) => {
                    return <div key={index}>
                        <Image height={500} width={500} alt="pic" src={user.avatar} />
                        <h2>{user.first_name} {user.last_name}</h2>
                    </div>
                })
            }
        </div>
    )
}

export default Users
