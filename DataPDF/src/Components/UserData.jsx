function UserData({users})
{
    return(
        <>
                {
                    users.map((
                        curUser)=>{
                            const { id, name,email,phone} = curUser

                            return (
                                <tr key={id}>
                                    <td>
                                        {id}
                                    </td>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td>
                                        {phone}
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
        </>
    )
}

export default UserData