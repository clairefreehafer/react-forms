import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <Link to="/newPlaylist" className="btn btn-primary btn-block">
            <span className="glyphicon glyphicon-plus" /> PLAYLIST
          </Link>
        </h4>
        <hr />
        <ul className="list-unstyled">
          {props.playlists.map(playlist => {
            return  (
              <li key={playlist.id} className="playlist-item menu-item">
                <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </sidebar>
  );
}

export default Sidebar;
