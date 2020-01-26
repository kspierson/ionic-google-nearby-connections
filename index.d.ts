import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare class GoogleNearbyConnectionsOriginal extends IonicNativePlugin {
    startAdvertising(deviceName: String, strategyType: String, serviceId: String): Promise<any>;
    startDiscovery(strategyType: String, serviceId: String): Promise<any>;
    stopAdvertising(): Promise<any>;
    stopDiscovery(): Promise<any>;
    stopAllEndpoints(): Promise<any>;
    onEndpointFound(): Observable<any>;
    onEndpointLost(): Observable<any>;
    onConnectionFound(): Observable<any>;
    onConnection(): Observable<any>;
    onConnectionLost(): Observable<any>;
    acceptConnection(endpointId: String): Promise<any>;
    denyConnection(endpointId: String): Promise<any>;
    sendPayload(endpointId: String, payload: String): Promise<any>;
    onPayloadReceived(): Observable<any>;
    disconnectFromEndpoint(endpointId: String): Promise<any>;
}

export declare const GoogleNearbyConnections: GoogleNearbyConnectionsOriginal;