                           {/** ancien composant vos activités
                            {args.activite !== undefined && args.activite.length > 0 ? <>
                                <TitleSection className="mt-5">Dernières activités de votre vente</TitleSection>
                                <Panel>
                                    <ListGroupActionAmener numbered>
                                        {args.activite.map((col, i) => (
                                            <ListGroupItem key={i}>
                                                <div className="d-flex flex-column">
                                                    <h4>{args.activite[i].fields.message}</h4>
                                                    <p><span> {moment(args.activite[i].fields.date).format('DD/MM/YYYY')}</span></p>
                                                </div>

                                            </ListGroupItem>
                                        ))}


                                    </ListGroupActionAmener>
                                </Panel>
                            </> : <></>}
                                        **/}

                            {/** ancien composant vos rdv
                            {args.rdv !== undefined && args.rdv.length > 0 ?
                                <div>
                                    <TitleSection>Vos prochains rendez-vous</TitleSection>
                                    <div className="d-flex flex-row justify-start align-items-stretch flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-wrap">
                                        {args.rdv.map((col, i) => (
                                            <CardRdv key={i}>
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src={icnRdv} alt="votre rendez-vous" />
                                                    {args.rdv[i].fields.statut === "a programmer" ? (
                                                        <p><small>Date</small>Non programmé</p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "en cours de prog" ? (
                                                        <p><small>Date</small>A programmer</p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "programme" ? (
                                                        <p><small>Date</small>
                                                            {args.rdv[i].fields.date}
                                                        </p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "passe" ? (
                                                        <p><small>Déjà réalisé</small>
                                                            {args.rdv[i].fields.date}
                                                        </p>
                                                    ) : (<>{" "}</>)}
                                                </div>
                                                <div>
                                                    <h5>{args.rdv[i].fields.nom}</h5>
                                                    <div className="link">
                                                        {args.rdv[i].fields.statut === "en cours de prog" ? (
                                                            <LinkS href={args.rdv[i].fields.lien_reservation} target="blank">Indiquez vos disponibilités</LinkS>
                                                        ) : (<>{" "}</>)}
                                                        {args.rdv[i].fields.statut === "programme" ? (
                                                            <>
                                                                <LinkS onClick={toggle3}>Vous n'êtes plus disponible ?</LinkS>
                                                                <ButtonPrimarySmall className="mt-2" href={args.rdv[i].fields.lien_reunion} color="primary">Rejoindre la réunion</ButtonPrimarySmall>
                                                            </>
                                                        ) : (<>{" "}</>)}

                                                            {args.rdv[i].fields.nom === "Rendez-vous avec votre conseillé" & args.rdv[i].fields.statut === "a programmer" ? (
                                                            <>
                                                            <LinkS href={args.rdv[i].fields.lien_reservation} target="blank">Réservez une réunion avec votre conseillé</LinkS>
                                                            </>
                                                        ) : (<>{" "}</>)}

                                                    </div>
                                                </div>
                                            </CardRdv>
                                        ))}
                                    </div>
                                </div>
                                : <></>

                            }
                        **/}

                         {/**  ancien composant de liste item des event
    <ListGroupS className={args.etat + ' ' + args.etatcss}>
      <h4 className="mb-2 type">
        {args.type === "questionnaire" ? (
            <>
              Remplissez votre questionnaire client
            </>
          ) : (<>{""}</>)}
        <br/>
      </h4>

        <Content className="flex-grow-1">

          <h4>{args.message}</h4>
          <div dangerouslySetInnerHTML={{__html: args.contenu}}></div>
          

          {args.action === "Voiretsigner" ? (
            <>
              <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Lire et signer</ButtonPrimarySmall>
            </>
          ) : (<>{""}</>)}
          

          {args.action === "Contacter" ? (
            <>
              <ButtonPrimarySmall color="primary" href="#" className="mt-3 mr-3"> Contacter mon conseillé</ButtonPrimarySmall>
            </>
          ) : (<>{""}</>)}

        {args.action === "rdvActe" ? (
            <>
              <ButtonPrimarySmall color="primary" href={args.lienDoodle} target="blank" className="mt-3 mr-3"> Indiquez vos disponibilités</ButtonPrimarySmall>
            </>
          ) : (<>{" "}</>)}

        {args.action === "telecharger" ? (
            <>
              <ButtonPrimary color="primary" href={args.lienDoc}  target="_blank" className="mt-3 mr-3"> Télécharger</ButtonPrimary>
            </>
          ) : (<>{" "}</>)}



        </Content>
        <Actions>
          
          {args.action === "ajouterDoc" ? (
            <>
              <LinkCard href="#" className="mr-3"> Ajouter le document</LinkCard>
            </>
          ) : (<>{" "}</>)}


        {args.action === "ensavoirplusOffre" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleOffre}> Qu’est-ce que l'offre d'achat ?</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusCompromis" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleCompromis}> Qu’est-ce que le compromis de vente ?</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusActe" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleActe}> Qu’est-ce que l'acte de vente authentique ?</LinkCard>
            </>
          ) : (<>{" "}</>)}



        </Actions>
    </ListGroupS>
          **/}