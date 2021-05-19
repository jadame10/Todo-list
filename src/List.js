import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>Loading</p>;
  return (
        <tbody>
      {repos.data.map((item) => {
        return (
         
          
                <tr key = {item.id}>
                  <td>
                    {item.id}
                    </td>
                  <td>
                    {item.title}
                    </td>
                    <td>
                    {item.completed}
                    </td>
                    <td>
                    {item.created_at.split('T').join(' ').split('+').join(' ')}
                    </td>
                  
                </tr>
        
        );
      })}
    </tbody>
  );
};
export default List;