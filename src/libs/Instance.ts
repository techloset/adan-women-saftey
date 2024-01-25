import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.18.208:3000',
});

const GET = Instance.get.bind(Instance);
const POST = Instance.post.bind(Instance);
const DELETE = Instance.delete.bind(Instance);
const PATCH = Instance.patch.bind(Instance);

export {GET, PATCH, POST, DELETE};
export default Instance;
