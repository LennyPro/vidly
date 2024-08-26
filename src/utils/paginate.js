import _ from 'lodash';


export function paginate(items, pageNumber, pageSize) {

    // caliculate starting index of the items array  on the page selected
    const startIndex = (pageNumber - 1) * pageSize;

    // to chain lodash methods, convert 'items' array into lodash wrapper object _(arrayOfItems)
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();

    // slice an array at 'startIndex'
    // take amount of items(movies) per page
    // conver lodash wrapper object into regular array by chaining .value()

}
