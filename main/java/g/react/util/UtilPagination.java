

package g.react.util;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Service
public class UtilPagination {
  
    private String makePaginationLink(HttpServletRequest request, int page) {

        return String.format("%s?page=%d", request.getRequestURI(), page);

    }
    
    public Map<String,String > linksPagination (HttpServletRequest request, Page<?> listPage){
        
           Map<String, String> links = new HashMap<>();

        if (!listPage.isFirst()) {
            links.put("prev", makePaginationLink(request, listPage.getNumber() - 1));
        }

        if (!listPage.isLast()) {
            links.put("next", makePaginationLink(request, listPage.getNumber() + 1));
        }
        return links;
    }

}
