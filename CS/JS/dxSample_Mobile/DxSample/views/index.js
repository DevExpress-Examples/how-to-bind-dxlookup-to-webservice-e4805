DxSample.Index = function (params) {
    var viewModel = {

        dSource: {
            changed: new $.Callbacks(),
            load: function (loadOptions) {
                var dfd = new $.Deferred();
                if (loadOptions.refresh) {
                    $
                    .get('http://sampleservices.devexpress.com/api/Categories')
                    .done(function (result) {
                        dfd.resolve(result);
                    });
                    return dfd.promise();
                }
            },
            byKey: function (key) {
                return $.get('http://sampleservices.devexpress.com/api/Categories/' + key.toString());
            }
        }
    };
    return viewModel;
};