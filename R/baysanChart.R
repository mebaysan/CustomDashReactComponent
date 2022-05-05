# AUTO GENERATED FILE - DO NOT EDIT

#' @export
baysanChart <- function(id=NULL, data=NULL, legendPosition=NULL, xField=NULL, yField=NULL) {
    
    props <- list(id=id, data=data, legendPosition=legendPosition, xField=xField, yField=yField)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BaysanChart',
        namespace = 'baysan_custom_components',
        propNames = c('id', 'data', 'legendPosition', 'xField', 'yField'),
        package = 'baysanCustomComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
