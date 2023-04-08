import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    // The mutation DELETE_CLIENT returns the delected client data which is stored in deleteClient
    variables: { id: client.id },
    // 1. REFETCHING THE LIST OF CLIENTS
    //refetchQueries: [{ query: GET_CLIENTS }], This will re execute get_clients this could slow down the application in the long run.
    //2. REFRESH CACHE (This is more ideal for performance
    update(cache, { data: { deleteClient } }) {
      // This is more ideal for performance
      const { clients } = cache.readQuery({ query: GET_CLIENTS }); //Here we will fetch the cached query result of GET_CLIENTS
      cache.writeQuery({
        // This will update the cached data refreshes the client page
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
