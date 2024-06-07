export default function handleResponseFromAPI(ppromise) {
    ppromise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  })
    .catch(() => new Error());
}
