const protocol = 'http:';
const severUrl = '//10.84.144.229';
const port = ':8051/';
const catalog = 'api/';
const url = `${protocol}${severUrl}${port}${catalog}`;
const taskUrl = `${url}tasks/`;
const taskResultsUrl = `${url}task_results/`;
const productsUrl = `${url}products/`;
const workersUrl = `${url}workers/`;

export {
    taskUrl,
    taskResultsUrl,
    productsUrl,
    workersUrl
}
