
function UserData() {
    return (
        <div>
            {/* <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((person) =>
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.email}</td>
                                    <td>{person.phone}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> */}
            <div className='search-field'>
                <form action="#">
                    <input type="text" />
                </form>
            </div>


            <div className='cards-wrapper'>
                <div className='card'>
                    <a href='#'>
                        <img src={logo} />
                    </a>
                    <div className='card-info'>
                        <div className='title'>{ }</div>
                        <div className='price'>45$ </div>
                    </div>


                </div>
            </div>

            
        </div>
    )
}

export default UserData;