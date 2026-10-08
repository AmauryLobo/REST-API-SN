(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    // 1. Capturar o payload JSON enviado na requisição
    var body = request.body.data;

    // 2. Inicializar um novo registo na tabela de incidentes
    var grIncident = new GlideRecord('incident');
    grIncident.initialize();

    // 3. Mapear os campos do JSON para os campos nativos do ServiceNow
    grIncident.short_description = body.short_description;
    grIncident.description = body.description;
    grIncident.contact_type = 'integration';

    // 4. Inserir o registo no banco de dados e obter o SysID
    var incidentId = grIncident.insert();

    // 5. Configurar e devolver a resposta HTTP 201 Created
    response.setStatus(201);
    response.setBody({
        "status": "sucesso",
        "mensagem": "Incidente gerado via Webhook",
        "numero_incidente": grIncident.getValue('number'),
        "id_registro": incidentId
    });

})(request, response);
