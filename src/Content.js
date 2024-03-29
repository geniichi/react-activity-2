import { FaTrashAlt } from 'react-icons/fa';

const Content = ( { items, handleCheck, handleDelete  } ) =>{

    return(
            <main>
             { items.length > 0 ? (
              <ul>
                { items.map( (item) => (
                    <li className='item' key={item.id}>
                      <input
                        type="checkbox"
                        onChange={ () => handleCheck(item.id) }
                        checked={item.checked}
                      />

                      <label
                       style={ (item.checked)? { textDecoration:'line-through'} : null }
                      >
                      {item.taskName}
                      </label>

                      <FaTrashAlt
                       onClick={() => handleDelete(item.id)}
                       role="button"
                       tabIndex="0"
                      />

                    </li>

                )
                )}


              </ul>
             ) : (
              <p style={ {marginTop : '2rem' }}> list is empty </p>
             )
          }
            </main>
    )


}

export default Content;
