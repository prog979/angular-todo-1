import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center" class="content">
            <h2>
                Welcome to {{title}}!
            </h2>
            <span style="display: block">{{ title }} app is running!</span>
            <img width="200" alt="Angular Logo"
                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
        </div>

        <div style="text-align:center" class="content">
            <h2>Here are some links to help you start: </h2>

            <ul>
                <li>
                    <h3><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h3>
                </li>
                <li>
                    <h3><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h3>
                </li>
                <li>
                    <h3><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h3>
                </li>
            </ul>
        </div>

        <div style="text-align:center" class="content">
            <h4> This App create automatically</h4>
        </div>
    `,
    styles: []
})
export class AppComponent {
    title = 'Todo';
}
