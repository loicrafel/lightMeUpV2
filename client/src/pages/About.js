import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar";
import { emailIsValid } from "../components/utils";

function About() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { sujet, email, message } = e.target.elements;

    if (emailIsValid(email.value) === true) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/mail/contact`,
        withCredentials: true,
        data: {
          sujet: sujet.value,
          email: email.value,
          message: message.value,
        },
      })
        .then(
          setStatus("Submit"),
          (sujet.value = ""),
          (email.value = ""),
          (message.value = ""),
          window.alert("Votre requête a bien été envoyée!")
        )
        .catch((res) => {
          console.log(res);
        });
    } else {
      setStatus("Submit");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about">
          <p className="m1">Conditions d'utilisation</p>
          <p className="m2">
            ARTICLE 1 : <br /> Objet Les présentes « conditions générales
            d'utilisation » ont pour objet l'encadrement juridique de
            l’utilisation du site [votre site] et de ses services. Ce contrat
            est conclu entre : Le gérant du site internet, ci-après désigné «
            l’Éditeur », Toute personne physique ou morale souhaitant accéder au
            site et à ses services, ci-après appelé « l’Utilisateur ». Les
            conditions générales d'utilisation doivent être acceptées par tout
            Utilisateur, et son accès au site vaut acceptation de ces
            conditions. <br /> ARTICLE 2 : <br /> Mentions légales Pour les
            personnes morales : Le site [nom du site] est édité par la société
            [nom de la société], [statut juridique (SAS, SARL, etc.)] au capital
            de [montant en euros] €, dont le siège social est situé au [adresse
            du siège social]. La société est représentée par [nom et prénom du
            responsable]. Pour les personnes physiques : Le site [nom du site]
            est édité par [nom et prénom du responsable], domicilié au [adresse
            postale]. ARTICLE 3 : accès aux services L’Utilisateur du site
            [votre site] a accès aux services suivants : • [Service n°1] •
            [Service n°2] • [Service n°3] • [Service n°4] • … Tout Utilisateur
            ayant accès a internet peut accéder gratuitement et depuis n’importe
            où au site. Les frais supportés par l’Utilisateur pour y accéder
            (connexion internet, matériel informatique, etc.) ne sont pas à la
            charge de l’Éditeur. Les services suivants ne sont pas accessible
            pour l’Utilisateur que s’il est membre du site (c’est-à-dire qu’ile
            st identifié à l’aide de ses identifiants de connexion) : • [Service
            n°1] • [Service n°2] • … Le site et ses différents services peuvent
            être interrompus ou suspendus par l’Éditeur, notamment à l’occasion
            d’une maintenance, sans obligation de préavis ou de justification.
            <br /> ARTICLE 4 : <br /> Responsabilité de l’Utilisateur
            L'Utilisateur est responsable des risques liés à l’utilisation de
            son identifiant de connexion et de son mot de passe. Le mot de passe
            de l’Utilisateur doit rester secret. En cas de divulgation de mot de
            passe, l’Éditeur décline toute responsabilité. L’Utilisateur assume
            l’entière responsabilité de l’utilisation qu’il fait des
            informations et contenus présents sur le site [votre site]. Tout
            usage du service par l'Utilisateur ayant directement ou
            indirectement pour conséquence des dommages doit faire l'objet d'une
            indemnisation au profit du site. Le site permet aux membres de
            publier sur le site : • [Commentaires] ; • [Oeuvres] ; • Etc. Le
            membre s’engage à tenir des propos respectueux des autres et de la
            loi et accepte que ces publications soient modérées ou refusées par
            l’Éditeur, sans obligation de justification. En publiant sur le
            site, l’Utilisateur cède à la société éditrice le droit non exclusif
            et gratuit de représenter, reproduire, adapter, modifier, diffuser
            et distribuer sa publication, directement ou par un tiers autorisé.
            L’Éditeur s'engage toutefois à citer le membre en cas d’utilisation
            de sa publication <br /> ARTICLE 5 : <br /> Responsabilité de
            l’Éditeur Tout dysfonctionnement du serveur ou du réseau ne peut
            engager la responsabilité de l’Éditeur. De même, la responsabilité
            du site ne peut être engagée en cas de force majeure ou du fait
            imprévisible et insurmontable d'un tiers. Le site [votre site]
            s'engage à mettre en œuvre tous les moyens nécessaires pour garantir
            la sécurité et la confidentialité des données. Toutefois, il
            n’apporte pas une garantie de sécurité totale. L’Éditeur se réserve
            la faculté d’une non-garantie de la fiabilité des sources, bien que
            les informations diffusées su le site soient réputées fiables.
            <br /> ARTICLE 6 : <br /> Propriété intellectuelle Les contenus du
            site [votre site] (logos, textes, éléments graphiques, vidéos, etc.)
            son protégés par le droit d’auteur, en vertu du Code de la propriété
            intellectuelle. L’Utilisateur devra obtenir l’autorisation de
            l’éditeur du site avant toute reproduction, copie ou publication de
            ces différents contenus. Ces derniers peuvent être utilisés par les
            utilisateurs à des fins privées ; tout usage commercial est
            interdit. L’Utilisateur est entièrement responsable de tout contenu
            qu’il met en ligne et il s’engage à ne pas porter atteinte à un
            tiers. L’Éditeur du site se réserve le droit de modérer ou de
            supprimer librement et à tout moment les contenus mis en ligne par
            les utilisateurs, et ce sans justification.
            <br /> ARTICLE 7 :<br /> Données personnelles L’Utilisateur doit
            obligatoirement fournir des informations personnelles pour procéder
            à son inscription sur le site. L’adresse électronique (e-mail) de
            l’utilisateur pourra notamment être utilisée par le site [nom de
            votre site] pour la communication d’informations diverses et la
            gestion du compte. [Votre site] garantie le respect de la vie privée
            de l’utilisateur, conformément à la loi n°78-17 du 6 janvier 1978
            relative à l'informatique, aux fichiers et aux libertés. Le site est
            déclaré auprès de la CNIL sous le numéro suivant : [numéro]. En
            vertu des articles 39 et 40 de la loi en date du 6 janvier 1978,
            l'Utilisateur dispose d'un droit d'accès, de rectification, de
            suppression et d'opposition de ses données personnelles.
            L'Utilisateur exerce ce droit via : • Son espace personnel sur le
            site ; • Un formulaire de contact ; • Par mail à [adresse mail de
            l’administrateur] ; • Par voie postale au [votre adresse].
            <br /> ARTICLE 8 :<br /> Liens hypertextes Les domaines vers
            lesquels mènent les liens hypertextes présents sur le site
            n’engagent pas la responsabilité de l’Éditeur de [votre site], qui
            n’a pas de contrôle sur ces liens. Il est possible pour un tiers de
            créer un lien vers une page du site [votre site] sans autorisation
            expresse de l’éditeur.
            <br /> ARTICLE 9 :<br /> Évolution des conditions générales
            d’utilisation Le site [votre site] se réserve le droit de modifier
            les clauses de ces conditions générales d’utilisation à tout moment
            et sans justification. <br /> ARTICLE 10 :<br /> Durée du contrat La
            durée du présent contrat est indéterminée. Le contrat produit ses
            effets à l'égard de l'Utilisateur à compter du début de
            l’utilisation du service.
            <br /> ARTICLE 11 :<br /> Droit applicable et juridiction compétente
            Le présent contrat dépend de la législation française. En cas de
            litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les
            tribunaux de [nom de ville] sont compétents pour régler le
            contentieux.
          </p>
        </div>

        <div className="about">
          <p className="m1">Contact</p>
          <div className="m2">
            <form className="contact" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label> <br />
                <input type="email" id="email" required />
              </div>
              <br />
              <div>
                <label htmlFor="sujet">Sujet:</label>
                <br />
                <input type="text" id="sujet" required />
              </div>
              <br />
              <div>
                <label htmlFor="message">Message:</label>
                <br />
                <textarea maxLength="500" id="message" required />
              </div>
              <br />
              <button type="submit">{status}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
