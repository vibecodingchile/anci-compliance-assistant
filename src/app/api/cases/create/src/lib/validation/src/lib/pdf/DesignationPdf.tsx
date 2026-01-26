import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export function DesignationPdf({ data }: { data: any }) {
  return (
    <Document>
      <Page size="A4" style={{ padding: 32 }}>
        <Text style={{ fontSize: 16, marginBottom: 12 }}>
          Documento formal de designación — Delegado de Ciberseguridad (ANCI)
        </Text>

        <View style={{ marginBottom: 10 }}>
          <Text>Identificación</Text>
          <Text>Nombre: {data.delegateFullName}</Text>
          <Text>RUT: {data.delegateRut}</Text>
          <Text>Domicilio: {data.delegateAddress}</Text>
          <Text>Correo institucional: {data.delegateEmailInstitutional}</Text>
          <Text>Teléfono: {data.delegatePhone}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text>Vínculo jurídico</Text>
          <Text>Tipo: {data.legalLinkType}</Text>
          <Text>Referencia: {data.legalLinkReference}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text>Posición / función</Text>
          <Text>{data.orgPosition}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text>Poder / habilitación para representar ante la Agencia</Text>
          <Text>{data.representationPowerDesc}</Text>
        </View>

        <View style={{ marginTop: 18 }}>
          <Text>Subrogancia y canal oficial</Text>
          <Text>Correo subrogante: {data.subrogantEmailInstitutional}</Text>
          <Text>
            Envío por canal oficial (portal ANCI) y correos institucionales como medio oficial.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
