var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var GoogleNearbyConnections = /** @class */ (function (_super) {
    __extends(GoogleNearbyConnections, _super);
    function GoogleNearbyConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyConnections.prototype.startAdvertising = function (deviceName, strategyType, serviceId) { return cordova(this, "startAdvertising", {}, arguments); };
    GoogleNearbyConnections.prototype.startDiscovery = function (strategyType, serviceId) { return cordova(this, "startDiscovery", {}, arguments); };
    GoogleNearbyConnections.prototype.stopAdvertising = function () { return cordova(this, "stopAdvertising", {}, arguments); };
    GoogleNearbyConnections.prototype.stopDiscovery = function () { return cordova(this, "stopDiscovery", {}, arguments); };
    GoogleNearbyConnections.prototype.stopAllEndpoints = function () { return cordova(this, "stopAllEndpoints", {}, arguments); };
    GoogleNearbyConnections.prototype.onEndpointFound = function () { return cordova(this, "onEndpointFound", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.onEndpointLost = function () { return cordova(this, "onEndpointLost", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.onConnectionFound = function () { return cordova(this, "onConnectionFound", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.onConnection = function () { return cordova(this, "onConnection", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.onConnectionLost = function () { return cordova(this, "onConnectionLost", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.acceptConnection = function (endpointId) { return cordova(this, "acceptConnection", {}, arguments); };
    GoogleNearbyConnections.prototype.denyConnection = function (endpointId) { return cordova(this, "denyConnection", {}, arguments); };
    GoogleNearbyConnections.prototype.sendPayload = function (endpointId, payload) { return cordova(this, "sendPayload", {}, arguments); };
    GoogleNearbyConnections.prototype.onPayloadReceived = function () { return cordova(this, "onPayloadReceived", { "observable": true }, arguments); };
    GoogleNearbyConnections.prototype.disconnectFromEndpoint = function (endpointId) { return cordova(this, "disconnectFromEndpoint", {}, arguments); };
    GoogleNearbyConnections.pluginName = "GoogleNearbyConnections";
    GoogleNearbyConnections.plugin = "cordova-plugin-google-nearby-connections";
    GoogleNearbyConnections.pluginRef = "cordova.plugins.GoogleNearbyConnections";
    GoogleNearbyConnections.repo = "";
    GoogleNearbyConnections.platforms = ["Android"];
    GoogleNearbyConnections.install = "";
    GoogleNearbyConnections = __decorate([
        Injectable()
    ], GoogleNearbyConnections);
    return GoogleNearbyConnections;
}(IonicNativePlugin));
export { GoogleNearbyConnections };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnktY29ubmVjdGlvbnMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFXVywyQ0FBaUI7Ozs7SUFFNUQsa0RBQWdCLGFBQUMsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFNBQWlCO0lBSzVFLGdEQUFjLGFBQUMsWUFBb0IsRUFBRSxTQUFpQjtJQUt0RCxpREFBZTtJQUtmLCtDQUFhO0lBS2Isa0RBQWdCO0lBT2hCLGlEQUFlO0lBT2YsZ0RBQWM7SUFPZCxtREFBaUI7SUFPakIsOENBQVk7SUFPWixrREFBZ0I7SUFLaEIsa0RBQWdCLGFBQUMsVUFBa0I7SUFLbkMsZ0RBQWMsYUFBQyxVQUFrQjtJQUtqQyw2Q0FBVyxhQUFDLFVBQWtCLEVBQUUsT0FBZTtJQU8vQyxtREFBaUI7SUFLakIsd0RBQXNCLGFBQUMsVUFBa0I7Ozs7Ozs7SUFwRjlCLHVCQUF1QjtRQURuQyxVQUFVLEVBQUU7T0FDQSx1QkFBdUI7a0NBYnBDO0VBYTZDLGlCQUFpQjtTQUFqRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVOZWFyYnlDb25uZWN0aW9ucycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnktY29ubmVjdGlvbnMnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuR29vZ2xlTmVhcmJ5Q29ubmVjdGlvbnMnLFxuICByZXBvOiAnJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgaW5zdGFsbDogJycsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZU5lYXJieUNvbm5lY3Rpb25zIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0QWR2ZXJ0aXNpbmcoZGV2aWNlTmFtZTogU3RyaW5nLCBzdHJhdGVneVR5cGU6IFN0cmluZywgc2VydmljZUlkOiBTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnREaXNjb3Zlcnkoc3RyYXRlZ3lUeXBlOiBTdHJpbmcsIHNlcnZpY2VJZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEFkdmVydGlzaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wRGlzY292ZXJ5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wQWxsRW5kcG9pbnRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25FbmRwb2ludEZvdW5kKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25FbmRwb2ludExvc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbkNvbm5lY3Rpb25Gb3VuZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uQ29ubmVjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uQ29ubmVjdGlvbkxvc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFjY2VwdENvbm5lY3Rpb24oZW5kcG9pbnRJZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGRlbnlDb25uZWN0aW9uKGVuZHBvaW50SWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kUGF5bG9hZChlbmRwb2ludElkOiBTdHJpbmcsIHBheWxvYWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25QYXlsb2FkUmVjZWl2ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3RGcm9tRW5kcG9pbnQoZW5kcG9pbnRJZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufSJdfQ==