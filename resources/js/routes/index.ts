import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
export const backpack = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backpack.url(options),
    method: 'get',
})

backpack.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
backpack.url = (options?: RouteQueryOptions) => {
    return backpack.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
backpack.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backpack.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
backpack.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: backpack.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
const backpackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backpack.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
backpackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backpack.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::backpack
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
backpackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backpack.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

backpack.form = backpackForm

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:10
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm
