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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var GoogleNearbyConnectionsOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyConnectionsOriginal, _super);
    function GoogleNearbyConnectionsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyConnectionsOriginal.prototype.startAdvertising = function (deviceName, strategyType, serviceId) { return cordova(this, "startAdvertising", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.startDiscovery = function (strategyType, serviceId) { return cordova(this, "startDiscovery", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.stopAdvertising = function () { return cordova(this, "stopAdvertising", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.stopDiscovery = function () { return cordova(this, "stopDiscovery", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.stopAllEndpoints = function () { return cordova(this, "stopAllEndpoints", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onEndpointFound = function () { return cordova(this, "onEndpointFound", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onEndpointLost = function () { return cordova(this, "onEndpointLost", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onConnectionFound = function () { return cordova(this, "onConnectionFound", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onConnection = function () { return cordova(this, "onConnection", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onConnectionLost = function () { return cordova(this, "onConnectionLost", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.acceptConnection = function (endpointId) { return cordova(this, "acceptConnection", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.denyConnection = function (endpointId) { return cordova(this, "denyConnection", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.sendPayload = function (endpointId, payload) { return cordova(this, "sendPayload", {}, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.onPayloadReceived = function () { return cordova(this, "onPayloadReceived", { "observable": true }, arguments); };
    GoogleNearbyConnectionsOriginal.prototype.disconnectFromEndpoint = function (endpointId) { return cordova(this, "disconnectFromEndpoint", {}, arguments); };
    GoogleNearbyConnectionsOriginal.pluginName = "GoogleNearbyConnections";
    GoogleNearbyConnectionsOriginal.plugin = "cordova-plugin-google-nearby-connections";
    GoogleNearbyConnectionsOriginal.pluginRef = "cordova.plugins.GoogleNearbyConnections";
    GoogleNearbyConnectionsOriginal.repo = "";
    GoogleNearbyConnectionsOriginal.platforms = ["Android"];
    GoogleNearbyConnectionsOriginal.install = "";
    return GoogleNearbyConnectionsOriginal;
}(IonicNativePlugin));
var GoogleNearbyConnections = new GoogleNearbyConnectionsOriginal();
export { GoogleNearbyConnections };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnktY29ubmVjdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFXVywyQ0FBaUI7Ozs7SUFFNUQsa0RBQWdCLGFBQUMsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFNBQWlCO0lBSzVFLGdEQUFjLGFBQUMsWUFBb0IsRUFBRSxTQUFpQjtJQUt0RCxpREFBZTtJQUtmLCtDQUFhO0lBS2Isa0RBQWdCO0lBT2hCLGlEQUFlO0lBT2YsZ0RBQWM7SUFPZCxtREFBaUI7SUFPakIsOENBQVk7SUFPWixrREFBZ0I7SUFLaEIsa0RBQWdCLGFBQUMsVUFBa0I7SUFLbkMsZ0RBQWMsYUFBQyxVQUFrQjtJQUtqQyw2Q0FBVyxhQUFDLFVBQWtCLEVBQUUsT0FBZTtJQU8vQyxtREFBaUI7SUFLakIsd0RBQXNCLGFBQUMsVUFBa0I7Ozs7Ozs7a0NBakczQztFQWE2QyxpQkFBaUI7U0FBakQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTmVhcmJ5Q29ubmVjdGlvbnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5LWNvbm5lY3Rpb25zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkdvb2dsZU5lYXJieUNvbm5lY3Rpb25zJyxcbiAgcmVwbzogJycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIGluc3RhbGw6ICcnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVOZWFyYnlDb25uZWN0aW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzdGFydEFkdmVydGlzaW5nKGRldmljZU5hbWU6IFN0cmluZywgc3RyYXRlZ3lUeXBlOiBTdHJpbmcsIHNlcnZpY2VJZDogU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0RGlzY292ZXJ5KHN0cmF0ZWd5VHlwZTogU3RyaW5nLCBzZXJ2aWNlSWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN0b3BBZHZlcnRpc2luZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcERpc2NvdmVyeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEFsbEVuZHBvaW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uRW5kcG9pbnRGb3VuZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uRW5kcG9pbnRMb3N0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25Db25uZWN0aW9uRm91bmQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbkNvbm5lY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbkNvbm5lY3Rpb25Mb3N0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhY2NlcHRDb25uZWN0aW9uKGVuZHBvaW50SWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBkZW55Q29ubmVjdGlvbihlbmRwb2ludElkOiBTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFBheWxvYWQoZW5kcG9pbnRJZDogU3RyaW5nLCBwYXlsb2FkOiBTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uUGF5bG9hZFJlY2VpdmVkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0RnJvbUVuZHBvaW50KGVuZHBvaW50SWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn0iXX0=