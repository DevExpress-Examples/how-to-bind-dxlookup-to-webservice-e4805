# How to bind dxLookup to WebService


<p>This example illustrates how to bind the dxLookup to a WebService using the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Data/DataSource"><u>DataSource</u></a> object. Note that when you are using the DataSource with the dxLookup widget, it is also necessary to implement the byKey(keyValue)  method.</p><p><strong>Note:</strong> The current example does not implement the search mechanism. When using a web service, it is necessary to define the data searchString pattern to filter data at the web service level. For example:</p><br />


```js
if (loadOptions.refresh) {
       return $.get('http://sampleservices.devexpress.com/api/Products', {
            ...
            searchString: loadOptions.searchString || ''
        });
}

<bold>
```

<p>See also:</bold><br />
<a href="http://www.devexpress.com/Support/Center/Question/Details/KA18829"><u>dxLookup - Why the "Lookup callback was not defined" error is thrown when clicking an item if data is loaded from a web service</u></a></p>

<br/>


