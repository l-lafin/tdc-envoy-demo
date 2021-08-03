# **Envoy, a gateway for cloud native application/Envoy, um portão para aplicações cloud native?**

This is a repository containing a demo application using [Envoy proxy](https://www.envoyproxy.io/) to be presented in the [The Developer Conference](https://thedevconf.com/tdc/2021/transformation/).

## Architecture Design

The application is emulating a cloud platform solution based on containers that should be able to support multiples products/services under the same domain.

<br>

![Architecture Overview](./static/img/architectureoverview.png)

<br>

### **Platform components definition**

| Component             | Details                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Envoy router**      | Emulates the behavior of the `Cloud Provider` routers handling the incoming requests from users forwarding it to the respective domains/apps. |
| **Identity provider** | Responsible for authenticating the user based on `OpenID Connect`.                                                                            |
| **Landingpage**       | Friendly page of the platform responsible to show the available app/services catalog to the users.                                            |

<br>

### **Digihero components definition**

Digihero is the demo application hosted under the platform domain for the path `/digihero`.

| Component         | Details                                                                        |
| ----------------- | ------------------------------------------------------------------------------ |
| **Envoy gateway** | Entrypoint responsible to handle all the upcoming requests to the application. |
| **Frontend**      | Frontend to be displayed to the user under the path `/digihero`.               |
| **Dummy-api**     | Example of micro service to receive Api calls from the frontend.               |

<br>
